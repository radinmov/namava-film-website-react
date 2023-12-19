import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
    h2.title{
        text-align:right;
        font-size:21px;
    }

}
    ul{
        li{
            a{
                color:#fff;
                div.card{
                    h3{
                        width:170px;
                    }
                    img{
                        width:180px;
                        height:290px;
                        border-radius:${pallete.defaultRadiusS};
                    }
                }
            }
        }
    }
}
#slider
{
    height:auto;
}

`;
