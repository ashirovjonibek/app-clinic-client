import React from 'react';

/*admin
+998919687077
1

boss
998974455454

moderator


applicant ayol
998956541212
*/
function TestRequests() {
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

        const axios = require('axios');

        const config = {
            method: 'put',
            url: 'http://67.205.182.147:9090/api/auth/update/listenerByRole?roleId=5&userId=cc4fd4e5-6997-4105-ae97-004890ea2961',
            headers: {
                'Authorization': localStorage.getItem('app-clinic')
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <button onClick={testRequests} className="btn-default">
                Click me !
            </button>

        </div>
    );
}

export default TestRequests;