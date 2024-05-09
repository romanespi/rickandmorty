import { useEffect, useState } from "react";
import Element from "./Element";

function NavPage(props) {
  return (
    <div className="d-flex justify-content-between aling-items-center">
      <p>Page: {props.page}</p>
      <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page + 1)}>Page {props.page + 1}</button>
    </div>
  )
}

function ElementList() {
    const [elements, setElements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      let res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      let data = await res.json();
      setLoading(false);
      setElements(data.results);
    }

    fetchData()
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage}/>

        {loading ? (
          <h1>Loading...</h1>
          ) : (
            <div className="row">
              {elements.map(element => {
                return (
                  <div className="col-md-4"  key={element.id}>
                    <Element element={ element }/>
                  </div>
                 );
               })}
            </div>
          )}
          <NavPage page={page} setPage={setPage}/>
    </div>
  )
}

export default ElementList