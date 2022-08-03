import type { NextPage } from 'next'
import Masonry from 'react-masonry-css';
import axios from 'axios';

import Card from '../components/Card';
import { BASE_URL } from '../utils';
import { Image } from '../types';

interface IProps {
  images: Image[];
}

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const Home = ({images }: IProps) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
      {images?.map((image: Image) => <Card isShowingOnHome key={image._id} post={image} />)} 
    </Masonry>
  );
};

export default Home

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  return {
    props: {images: response.data },
  };
};
