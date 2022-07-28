import {FilmsDataPropsType} from '../../../types/types';
import Catalog from './catalog/catalog';
import Footer from '../../footer/footer';

const PageContent = ({filmsList}: FilmsDataPropsType): JSX.Element => (
  <div className="page-content">
    <Catalog filmsList={filmsList}/>
    <Footer />
  </div>
);

export default PageContent;
