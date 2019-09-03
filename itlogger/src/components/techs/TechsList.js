import React, { useEffect, useContext } from 'react';
import { TechContext } from '../../context/techs/techs.state'
import PropTypes from 'prop-types';
import { List } from '../styled/List';
import { Btn } from '../styled/Button';
import { Trash } from 'styled-icons/boxicons-solid';


const TechsList = ({toggleTechs}) => {
  const { getTechs,techs,loading ,deleteTech} = useContext(TechContext)
  useEffect(() => {
    getTechs()
  },[])



  return (
    <>
      <List>
          <div className="header">
          <h1>Techs</h1>
          </div>
          <div className="body">
          <ul>
          {
            !loading && techs!== null ? techs.map(t => (
              <li key={t.id}>
              {t.firstName} {" "} {t.lastName}
              <span onClick={() => deleteTech(t.id)}>
              <Trash size="34" />
              </span>
              </li>
              ))
              : null
            }
            </ul>
        </div>
        <div className="footer">
            <Btn cl onClick={toggleTechs}>Close</Btn>
        </div>
      </List>
    </>
  );
}


TechsList.propTypes  = {
  toggleTechs: PropTypes.func.isRequired,
  deleteTech: PropTypes.func.isRequired,
}
export default TechsList;
