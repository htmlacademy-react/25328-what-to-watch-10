import {FilmsDataPropsType} from '../../../types/types';

import Catalog from './catalog';
import Footer from '../../footer/footer';

function PageContent({filmsList}: FilmsDataPropsType): JSX.Element {
  return (
    <div className="page-content">
      <Catalog filmsList={filmsList}/>
      <Footer />
    </div>
  );
}

export default PageContent;
