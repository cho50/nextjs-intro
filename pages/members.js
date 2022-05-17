import Seo from "../components/Seo";

export default function members({ data }) {

    return (

        <div className="container">
            <Seo title="Home" />

            {data?.map((member) => {

                return (
                    <div onClick={() => onClick(member.mb_id, member.mb_name)} key={member.mb_no}>
                        <h4>
                            {member.mb_name}
                        </h4>
                    </div>
                )
            }
            )
            }
        </div>

    );
}

export async function getServerSideProps() {
    const { data } = await (await fetch(`http://localhost:3000/api/members`)).json();
    return {
        props: {
            data,
        }
    }
}