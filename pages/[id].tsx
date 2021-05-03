import api from '../services/api'
import { useRouter } from 'next/router'
import { GetStaticPaths } from 'next';
import styled from 'styled-components';
import React from 'react';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
      paths: [],
      fallback: "blocking"
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const recipe = await api.get(`/recipes/${id}/information`, {
    params: {
      apiKey: process.env.APIKEY
    }
  })

  const recipeData = recipe.data
  console.log(recipeData)

  if (!recipeData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      recipeData
    }
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);
  border-radius: 20px;
  width: 690px;

  .column1 {
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-top: 60px;

    img {
      position: relative;
      bottom: 20px;
      object-fit: cover;
      border-radius: 16px;
      height: 160px;
      width: 160px;
      box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.1) }

    h1 {
      color: #212121;
      font-size: 16px;
      width: 160px;
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

    .ingredients {
      width: 60px;  
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .items {
        display: flex;
        margin-top: 14px;
        align-items: center;
        justify-content: center;
        width: 300px;
        flex-flow: row wrap;
        flex-wrap: wrap;

        p {
          background-color: rgba(238,42,0, 0.1);
          padding: 6px 6px 8px 6px;
          color: #ee2a00;
          font-weight: bold;
          font-family: monospace;
          margin: 4px;
          white-space: nowrap;
          border-radius: 4px;
          font-size: 14px;
        }
      }

      h2 {
        color: #ee2a00;
        font-size: 16px;
        width: 160px;
        text-align: center;
        font-weight: bold;
      }
    }
  }

  .column2 {
    background-color: #fff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 40px;

    .itemsSteps {
      display: flex;
      align-items: center;
      max-height: 450px;
      flex-direction: column;
      overflow: auto;
      padding-right: 5px;

      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: #cecece;
        border-radius: 15px;
      }
      ::-webkit-scrollbar-thumb:hover{
        background: #c7c7c7;
      }
      ::-webkit-scrollbar-track{
        border-radius: 15px;
      }

      .steps {
        background-color: rgba(238,42,0, 0.1);
        font-weight: 500;
        width: 100%;
        color: #212121;
        font-family: monospace;
        margin: 4px;
        border-radius: 4px;
        padding: 8px 8px 8px 8px;
        margin: 4px;
        border-radius: 4px;
        font-size: 16px;

        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default function Id({ recipeData }) {
  return (
    <Container>
      <div className="column1">
        <img src={recipeData.image} alt="food"/>
        <h1>
          {recipeData.title}
        </h1>
        <div className="ingredients">
          
          <div className="items">
            {
              recipeData.extendedIngredients.map((ingredient: any) => {
                return <p>
                  {ingredient.name}
                </p>            
              })
            }
          </div>
        </div>
      </div>
      <div className="column2">
        <div className="itemsSteps">
          {
            recipeData.analyzedInstructions[0].steps.map((instruct: any) => {
              return <div className="steps">
                <p>
                  {instruct.step}
                </p>
              </div>
            })
          }
        </div>
      </div>
    </Container>
  );
}