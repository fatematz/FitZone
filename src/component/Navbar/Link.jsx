
const Link = ({nav}) => {
    return (
        <div>
            {
                <li className="hover:bg-amber-400 ">
                    <a href={nav.path}> {nav.name} </a>
              </li>  
            }
        </div>
    );
};

export default Link;