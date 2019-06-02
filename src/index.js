import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                Warning!
                <div>Are you sure?</div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                    name="Silvia" 
                    time="6:00PM" 
                    content="Awesome course!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                    name="Zenny" 
                    time="9:00PM" 
                    content="A++" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard >
            <ApprovalCard >
                <CommentDetail 
                    name="Morning" 
                    time="10:00AM" 
                    content="A Great Course!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard >
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"))