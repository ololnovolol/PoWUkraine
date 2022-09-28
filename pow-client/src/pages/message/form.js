import { Form } from '@altiore/form';
import React from 'react';
import styled from 'styled-components';

const SmButton = styled.button`
  background: #88A87D none repeat scroll 0% 0%;
  height: 40px;
  weight: 100px;
  justify-content: flex;
  align-items: center;
  position: relative;
  max-width: 100%;
  align-items: center;
  color: #fff;
  min-width: 0px;
  min-height: 0px;
  border-radius: 5px;

  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #F0A30A;
    background: #6D8764;
    cursor: pointer;
  }
`;

const BgButton = styled.button`
  background: #88A87D none repeat scroll 0% 0%;
  height: 50px;
  weight: 100px;
  justify-content: flex;
  align-items: center;
  position: relative;
  max-width: 100%;
  align-items: center;
  color: #F0A30A;
  min-width: 0px;
  min-height: 0px;
  border-radius: 5px;

  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #fff;
    background: #6D8764;
    cursor: pointer;
  }
`;

const Block = styled.div`
  font-size: 2em;
  position: relative;
`;

const MessageForm = () => {
    const handleSubmit = (values) =>{
        console.log('handleSubmit', { 
          values,
        });
      };
  
    return (
      <>

            <h1>Create important message</h1>
            <Form  onSubmit={handleSubmit}>
                <Block>
                    <label>Title</label>
                    <input name="Title"/>
                    <label>Description</label>
                    <input name="Description"/>    
                    <label>Phone</label>
                    <input name="Phone"/>
                    <label>Date</label>
                    <input name="Date"/>
                </Block>

                <Block>
                    <label>Pin Location</label>
                    <SmButton>Pin</SmButton>

                    <label>Pin File</label>
                    <SmButton>Pin</SmButton>
                </Block>

              
                    <label>Submit</label>
                    <BgButton type="submit">Submit</BgButton>
           
            </Form>
      </>
    );
  };
  
  export default MessageForm;