import Header from "@/components/Header"

function home() {
  return (
    <section className="bg-mari h-screen w-full bg-contain bg-no-repeat bg-right-bottom">
      <Header />
      <div className="px-16 h-[80vh] gap-2 flex justify-center flex-col">
        <h1 className=" text-[60px] leading-[58px] font-semibold" style={{}}>If you can <span className="text-primary">imagine it <br />We will build</span> it for you!</h1>
        <p className="text-gray-900 line-clamp-5 w-[800px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nostrum architecto perspiciatis quidem voluptatum facilis esse animi, amet optio, recusandae explicabo a totam labore aliquid nisi incidunt facere molestiae. Tenetur.
        </p>
        <button className=' w-32 mt-2 font-normal border-2 border-black py-1 px-2 rounded-full '>Read More</button>

      </div>
    </section>
  )
}

export default home