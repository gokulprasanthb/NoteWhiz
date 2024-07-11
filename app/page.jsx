import Feed from "@components/Feed";

const Home = () => {
   return(
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Dive into a vibrant digital town square where 
            <br className="max-md:hidden"/>
            <span className="violet_gradient text-center"> your ideas resonate globally</span>
        </h1>
        <p className="desc text-center">Chatsheet is a place where your voice is heard and your ideas take flight. you can effortlessly broadcast your moments, engage with trending topics, and interact with a diverse network of people from all around the world. </p>

        <Feed/>
    </section>
  )

}


export default Home;
