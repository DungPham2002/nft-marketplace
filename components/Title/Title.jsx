export const Title = ({heading, paragraph}) => {
    return (
        <div className="w=full">
          <div className="w-[80%] my-0 mx-auto">
            <h2 className="text-[3rem] font-bold">{heading}</h2>
            <p>{paragraph}</p>
          </div>
        </div>
    );  
}