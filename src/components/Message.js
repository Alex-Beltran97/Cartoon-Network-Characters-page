import '../Style/Message.css'

const Message = ({display,msg})=>{
    return (
        <h3 className={display ? 'text-message':'hidden'}>{msg}</h3>
        // <h3 className='text-message'>DEE-DEE FUERA DE MI LABORATORIO!!!!!!</h3>
    );
};

export default Message;