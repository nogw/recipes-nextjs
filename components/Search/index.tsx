import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import api from '../../services/api';
import { Container } from './styles';

function Search() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([{ title: 'food' }])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const getComplete = async () => {
      const recipe = await api.get(`recipes/autocomplete?number=5&query=${search}`, {
        params: {
          apiKey: '34407b88f5c14be2b6f6aa390af42381'
        }
      })
      
      const resultsSearch = recipe.data

      setResults(resultsSearch)
    }

    getComplete()
  }, [search])

  const handleSearch = (food: string) => {
    setSearch(food)
  }

  return (
    <Container 
      onBlur={() => setShow(false)}
      onFocus={() => setShow(true)}
    >
      <BiSearch className="searchIcon"/>
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      {
        search && 
        <div className="options">
          {
            results.map((result: any) => {
              return <Link href={`/${result.id}`}>
                <p onClick={() => handleSearch(result.title)}>
                  {result.title}
                </p>
              </Link>
            })
          }
        </div>
      }
    </Container>
  );
};

export default Search;
