import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import * as API from '../services/api';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    allData: [],
    page: 0,
    query: '',
    isLoading: false,
    isModal: false,
    idLargeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page) {
      this.getDataByParams({ query, page });
    }
  }

  getDataByParams = ({ query, page }) => {
    const { allData } = this.state;
    const scrollHeight = page > 1 ? document.documentElement.scrollHeight : 0;
    this.setState({ isLoading: true });
    return (
      API.getImages({ query, page })
        .then(({ data }) =>
          this.setState({ allData: [...allData, ...data.hits] }),
        )
        // eslint-disable-next-line no-alert
        .catch(error => alert(error))
        .finally(() => {
          this.setState({ isLoading: false });
          window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth',
          });
        })
    );
  };

  handleOnSubmit = e => {
    this.setState({ allData: [], query: e, page: 1 });
  };

  handleLoadeMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  openModal = e => {
    this.setState({ isModal: true, idLargeImageURL: e.target.id });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { allData, isLoading, isModal, idLargeImageURL } = this.state;
    const getLargeImageURL = () => {
      const element = allData.find(i => i.id === Number(idLargeImageURL));
      const result = isModal ? element.largeImageURL : '';
      return result;
    };
    return (
      <>
        <Searchbar onSubmit={this.handleOnSubmit} />
        <ImageGallery data={allData} onClick={this.openModal} />
        {isLoading && <Loader />}
        {allData.length > 0 && <Button onClick={this.handleLoadeMore} />}
        {isModal && (
          <Modal onClick={this.closeModal}>
            <img src={getLargeImageURL()} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
