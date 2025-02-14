import { useState } from "react"

const CreateFeedInputs = () => {

    // 제목, 드라마/영화 이름
    const [createFeedInput, setCreateFeedInput] = useState({
        feedTitle:'',
        contentTitle:'',
        hashtag:'',
    });


    // 피드 생성 입력값 관리
    const handleCreateFeedChange = (e) => {
        const {name, value} = e.target;
        setCreateFeedInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div>
            <form action="">
                <input 
                type="text" 
                name="feedTitle"
                value={createFeedInput.feedTitle}
                onChange={handleCreateFeedChange}
                placeholder="제목"
                />

                <input 
                type="text" 
                name="contentTitle"
                value={createFeedInput.contentTitle}
                onChange={handleCreateFeedChange}
                placeholder="드마라 / 영화 이름"
                />
            </form>
        </div>
    )
}

export default CreateFeedInputs