/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { TechContext } from '../../context/techs/techs.state';

const TechOption = () => {
  const { getTechs, techs, loading } = useContext(TechContext);

  useEffect(() => {
    getTechs();
  }, []);

  return (
    <>
      {!loading &&
        techs !== null &&
        techs.map(t => (
          <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
            {t.firstName} {t.lastName}
          </option>
        ))}
    </>
  );
};

export default TechOption;
