import { useEffect } from 'react'
import styled from 'styled-components'
import Search from '../components/Search'
import Recipe from '../components/Recipe'
import api from '../services/api'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Items = styled.div`
  display: flex;
  margin-top: 80px;
`

export default function Home({ recipes }) {
  return (
    <Container>
      <Search/>
      <Items>
        {
          recipes.map(recipe => {
            return recipe.image && <Recipe 
              key={recipe.id}
              title={recipe.title}
              score={recipe.extendedIngredients.length}
              image={recipe.image}
              id={`/${recipe.id}`}
            />
          })
        }
      </Items>
    </Container>
  )
}

export const getStaticProps = async () => {
  const response = await api.get('/recipes/random', {
    params: {
      number: 5,
      tags: 'vegan',
      apiKey: process.env.APIKEY
    }
  })
  const recipes = response.data.recipes

  if (!recipes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      recipes
    }
  }
}