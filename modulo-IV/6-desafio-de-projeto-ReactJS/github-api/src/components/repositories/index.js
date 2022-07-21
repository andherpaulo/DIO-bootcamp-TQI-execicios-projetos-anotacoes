import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
    return <S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
    >
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
            <RepositoryItem
                name='aula1-github'
                linkToRepo='https://github.com/andherpaulo/aula1-github'
                fullName = 'andherpaulo/aula1-github'
            />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
            <RepositoryItem
                name='DIO-bootcamp-TQI-execicios-projetos-anotacoes'
                linkToRepo='https://github.com/andherpaulo/DIO-bootcamp-TQI-execicios-projetos-anotacoes'
                fullName = 'andherpaulo/DIO-bootcamp-TQI-execicios-projetos-anotacoes'
            /><RepositoryItem />
        </S.WrapperTabPanel>
    </S.WrapperTabs>;
};

export default Repositories;