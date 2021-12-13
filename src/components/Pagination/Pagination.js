

const Pagination = ({setPageNumber, pageNumber}) => {
    let next = () => {
        setPageNumber((x) => x + 1)
    }

    let prev = () => {
        if(pageNumber === 1) {
            return null
        } else {
            setPageNumber((x) => x - 1)
        }
    }

    return (
        <div className="container d-flex justify-content-center gap-5">
           <button onClick={prev} className="btn btn-primary">Prev</button>
           <button onClick={next} className="btn btn-primary">Next</button>
        </div>
    )
}

export default Pagination;
 