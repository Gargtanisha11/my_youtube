const ChatCard=({name,message})=>{
    return <div className="flex">
        <img className="h-8 m-2" src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png" alt="" />
        <h1 className="text-stone-500 m-2">{name}</h1>
        <h1 className="m-2"> {message}</h1>
    </div>
}

export default ChatCard