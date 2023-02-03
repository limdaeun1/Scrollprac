
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';

const D = () => {
    const location = useLocation();
    const { id } = queryString.parse(location.search);

    if (id === undefined) {
        return null;
    }

    return <><div className='pop'></div></>
}

export default D;