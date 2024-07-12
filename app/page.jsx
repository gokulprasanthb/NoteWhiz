import Feed from "@components/Feed";

const Home = () => {
   return(
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Achieve expert-level organization with NoteWhiz, 
            <br className="max-md:hidden"/>
            <span className="violet_gradient text-center">the ultimate choice for efficient and structured notes. </span>
        </h1>
        <p className="desc text-center">NoteWhiz suggests expertise and proficiency in handling notes. Be a whiz at note-taking with NoteWhiz, the expert’s choice for organized notes.</p>

        <Feed/>
    </section>
  )

}


export default Home;
