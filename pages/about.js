import Seo from "../components/Seo";

export default function about({ results }) {

    return (

        <div className="container">
            <Seo title="Home" />

            {results?.map((article) => {

                return (
                    <div onClick={() => onClick(article.id, article.title)} key={article.id}>
                        <h4>
                            {article.title}
                        </h4>
                    </div>
                )
            }
            )
            }
        </div>

        // <div>
        //     <Seo title="About" />
        //     <div>
        //         <h1>About</h1>
        //     </div>
        // </div>
    );
}

export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/articles`)).json();
    return {
        props: {
            results,
        }
    }
}