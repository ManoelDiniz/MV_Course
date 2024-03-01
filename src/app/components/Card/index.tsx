import {CardContainer,
    Content,
    HasInfo,
    ImageBackgroud,
    PostInfo,
    UserInfor,
    UserPicture} from './style'
import {FiThumbsUp} from 'react-icons/fi'
import image from './Mv_course.png'

export const Card = () => {
    return(
        <CardContainer>
            <ImageBackgroud src={image} style={{position:'relative', left:'25%', width:'50%'}}/>
            <Content>
                <UserInfor>
                    <UserPicture src='https://avatars.githubusercontent.com/u/141534353?v=4' />
                    <div>
                        <h4>Manoel Vitor</h4>
                        <p>Há 15 minutos</p>
                    </div>
                </UserInfor>
                <PostInfo>
                    <h4> Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para curso de html e css <strong>Saiba Mais</strong></p>

                </PostInfo>
                <HasInfo>
                    <h4> #Html #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}