import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

  let navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <main className='notfound'>
        <h1 className='notfound__title'>404</h1>
        <p className='notfound__text'>Страница не найдена</p>
        <p className='notfound__link' onClick={goBack}>Назад</p>
      </main >
    </>
  )
}

export default PageNotFound;