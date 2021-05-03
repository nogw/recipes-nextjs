import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 18px;
  padding: 0px 12px 12px 12px;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  
  img {
    position: relative;
    bottom: 20px;
    object-fit: cover;
    border-radius: 16px;
    height: 120px;
    width: 120px;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.1) }

  h1 {
    color: #212121;
    font-size: 14px;
    width: 120px;
    margin-bottom: 12px;
    text-align: center;
    font-weight: bold;
    display: block; 
    display: -webkit-box;
    max-width: 250px;
    min-height: 30px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    color: #ee2a00;
    background-color: rgba(238,42,0, 0.1);
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0px 0px 2px 0px;
    font-size: 16px;
    font-weight: bold;
  }
`;
