import React, {useEffect} from 'react';
import RequestFunctions from "./RequestFunctions";

//admin
//+998919687077
//1

// applicant / zayavitel
// phoneNumber: "998998887744",
// password: "998998887744",

// listener
// phoneNumber: "",
// password: "",

// moderator
// phoneNumber: "",
// password: "",

// supervisor /boss
// phoneNumber: "998112223344",
// password: "998112223344",
function TestRequests() {
    const [state, setState] = React.useState({
        firstName: "",
        lastName: ""
    })
    const [test, setTest] = React.useState({
        firstName: "test",
        lastName: "test"
    })
useEffect(()=>{
    setState(test)
},[])
    function testRequests() {
        let data = {
            id: "0a64e801-d963-4d98-815e-bd90d55542dc",
            fullName: "updated listenerq",
            email: "listener2@gmail.com",
            positionId: 1,
            districtId: 1,
            phoneNumber: "998777777777",
            address: "qweasrtuy",
            birthDate: "1994-04-26T00:00:00.000+00:00",
            nationId: 1,
            gender: "erkak",
            password: "998777777777",
            socialStatusId: 1,
            status: true,
            course: 1,
            sectionId: 1
        }

        RequestFunctions.getModerators()
            .then(res =>
                console.log(res)
            ).catch(error =>
            console.log(error))
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
        console.log(state)
    }

    {/*function testRequests() {*/
    }
    {/*    let data = {*/
    }
    //         phoneNumber: "+998919687077",
    //         password: "1",
    //     }
    //
    //     RequestFunctions.loginUser(data)
    //         .then(res =>
    //             console.log(res)
    //         ).catch(error =>
    //         console.log(error))
    // }

    return (
        <div>
            <button onClick={testRequests} className="btn-default">
                Click me !
            </button>
            <form>
                <label>
                    First name
                    <input
                        name="firstName"
                        className="input-text"
                        type="text"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last name
                    <input
                        className="input-text"
                        type="text"
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    );
}

export default TestRequests;