import React, {useState} from 'react';
import {Text, ScrollView} from "react-native";
import styled from "styled-components/native";
import {Category} from "../../../../../domain/category/Category";

type CategoryListProps = {
    categories: Category[];
};

const CategoryList = (props: CategoryListProps) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <CategoryContainer>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {props.categories.map((category, index) => {
                    return (
                        <CategoryComponent
                            key={category.id}
                            isSelected={selectedIndex === index}
                        >
                            <CategoryTitle>{category.title.value}</CategoryTitle>
                        </CategoryComponent>
                    );
                })}
            </ScrollView>
        </CategoryContainer>

    );
};

export default CategoryList;


const CategoryContainer = styled.View`
    height: 29px;
    background-color: #ff0000;
`;


type CategoryProps = {
    isSelected?: boolean
}

const CategoryComponent = styled.View<CategoryProps>`
    height: 29px;
    padding-left: 14px;
    padding-right: 14px;
    border-bottom-color: ${props => props.isSelected ? '#118DF0' : '#EFEFEF'};
    border-bottom-width: ${props => props.isSelected ? '2px' : '1px'};
    justify-content: center;
`;

const CategoryTitle = styled.Text<CategoryProps>`
    color: #3B3B3B; 
    font-size: 14px;
`;
