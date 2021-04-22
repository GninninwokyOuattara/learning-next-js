// import React from "react";
import { NextPage } from "next";
import axios from "axios";

type Post = { userId: number; id: string; title: string; body: string };

interface props {
    data: Post[];
}

const About: NextPage<props> = (props) => {
    return (
        <>
            {props.data.map((element) => (
                <h2 className="text-blue-200" key={element.id}>
                    {element.title}
                </h2>
            ))}
        </>
    );
};
About.getInitialProps = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return { data: res.data };
};

export default About;
