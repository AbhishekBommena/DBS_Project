import React from "react";
// testData contains example data to be rendered

// this renders for each new object with
const CardList = (props) => (
    <>
    <div>
        {
        /*  => map() is used to map one array into another array.
            => map takes function as an argument and 
            uses that function to convert into another array.
            => basically below line represents [<card/>,<card/>,<card/>]  */}
        {props.profiles.map(profile => <Card key={profile.id} { ...profile }/> )}
    </div>
    </>
);

class Card extends React.Component{
    render(){
        const profile = this.props
        return (
            <div>
                <h1>{profile.id} - {profile.acctHolderName}</h1>
                <h2>{profile.clearBalance}</h2>
                <h3>{profile.currency}</h3>
            </div>
        )
    }
}
export default CardList;