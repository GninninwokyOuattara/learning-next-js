import { NextPage, NextPageContext } from "next";

interface props {
    id: string | string[] | undefined;
}

const Post: NextPage<props> = (props) => {
    return <h1>Post Page {props.id}</h1>;
};

Post.getInitialProps = async (ctx: NextPageContext) => {
    const data = ctx.query.id;
    return { id: data };
};

export default Post;
