import { MagnifyingGlass } from 'react-loader-spinner';
import scss from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={scss.Overlay}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor='#c0efff'
        color='#e15b64'
      />
    </div>
  );
};


