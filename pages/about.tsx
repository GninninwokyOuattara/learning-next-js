// import React from "react";
import { NextPage } from "next";

type Post = { userId: number; id: string; title: string; body: string };

interface props {
    data: Post[];
}

const About: NextPage<props> = (props) => {
    // console.log(props);

    // return <h1 className="text-blue-200">About page {props.data[0].title}</h1>;
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
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await res.json();
    // return { stars: json.stargazers_count };
    return { data: data };
};

export default About;
