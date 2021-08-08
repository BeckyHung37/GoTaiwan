import React, { Component, useState, useEffect } from 'react';
import close from '../../images/icon_close.png';
import "./index.css";
import Mask from '../Mask'
import { addExperience } from '../../utils/api'

export const cities = [
    { order: 14, id: 'TWN1156', name: '高雄市' },
    { order: 15, id: 'TWN1158', name: '屏東縣' },
    { order: 13, id: 'TWN1160', name: '台南市' },
    { order: 4, id: 'TWN1161', name: '新竹市' },
    { order: 5, id: 'TWN1162', name: '新竹縣' },
    { order: 16, id: 'TWN1163', name: '宜蘭縣' },
    { order: 0, id: 'TWN1164', name: '基隆市' },
    { order: 6, id: 'TWN1165', name: '苗栗縣' },
    { order: 1, id: 'TWN1166', name: '台北市' },
    { order: 2, id: 'TWN1167', name: '新北市' },
    { order: 3, id: 'TWN1168', name: '桃園市' },
    { order: 8, id: 'TWN1169', name: '彰化縣' },
    { order: 12, id: 'TWN1170', name: '嘉義縣' },
    { order: 11, id: 'TWN1171', name: '嘉義市' },
    { order: 17, id: 'TWN1172', name: '花蓮縣' },
    { order: 9, id: 'TWN1173', name: '南投縣' },
    { order: 7, id: 'TWN1174', name: '台中市' },
    { order: 10, id: 'TWN1176', name: '雲林縣' },
    { order: 18, id: 'TWN1177', name: '台東縣' },
    { order: 19, id: 'TWN3414', name: '澎湖縣' },
    { order: 20, id: 'TWN3415', name: '金門縣' }
  ]

const AddExperience = (props) =>{
    const [file, setFile] = useState(null)
    const [sortedCities, setSortedCities] = useState([])

    useEffect(() => {
        //sort是array的一個function
        setSortedCities(cities.sort((a, b) => {
          return a.order - b.order
        }))
      }, [])

    const handleFileSelect = (event) => {
        // 檢查有沒有檔案
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setFile(e.target.result)
        }
        reader.readAsDataURL(event.target.files[0])
      }
    }

    return props.open &&(
    <div>
        <div className="AddExperienceBox">
            <div className="boxTitle">新增遊記</div>
            
            <img src={close} className="icn_close" 
            onClick={() => {
                props.onCloseAddExperience()
                setFile(null)
                }
                }/>  
                <div className="inputBox">
                    <div className="inputTitle">文章標題</div>
                    <input type="text" placeholder="輸入文章標題" className="titleInput" id='experienceTitle'/>
                </div>
                <div className="inputsBox"> 
                    <div className="inputBox">
                        <div className="inputTitle">旅遊日期</div>
                        <input type="date" placeholder="選擇旅遊日期" className="postInput" id='experienceDate'/>
                    </div>
                    <div className="inputBox">
                        <div className="inputTitle">旅遊城市</div>
                        <select name='cities' className='postInput' id='experienceCity' defaultValue=''>
                        <option value='' disabled>選擇城市</option>
                        {sortedCities.map((city) => {
                            return (<option key={city.id} value={city.name}>{city.name}</option>)
                        })}
                        </select>
                    </div>   
                </div>
            <div className="inputBox">
                    <div className="inputTitle">旅遊記事</div>
                    <textarea type="text" placeholder="旅行中發生哪些好玩的事呢？" className="diaryInput" id='experienceContent'/>
            </div>
            <input type="file" id="myfile" name="myfile"></input>
            <label htmlFor='experiencePic' className='btn_upload'>上傳圖片</label>
            <input type='file' id='experiencePic' onChange={handleFileSelect} />
            {/* 圖片預覽，有source的時候圖片就會跑出來 */}
            <img id='target' src={file} className='upload_preview' />
            <div className="saveBox">
                <button className="btn_submit" 
                onClick={() => 
                addExperience(file, props.onCloseAddExperience)
                
                }>
                儲存</button>
            </div>
        </div>
        <Mask/>
    </div>
    )
}

export default AddExperience;