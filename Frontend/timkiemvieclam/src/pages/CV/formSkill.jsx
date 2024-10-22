import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button,message,Upload } from 'antd';

const props = {
  name: 'file',
  action: '',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const FormSkill = () => {
    return(
        <>
            <div className="fullSkill">
                <div className="name">
                    <input placeholder="Nhập ngôn ngữ ứng tuyển..."/>
                </div>
                <div className="cv">
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload CV</Button>
                    </Upload>
                </div>
            </div>
            <div className='comment'>
                <textarea placeholder='Nhập chi tiết kinh nghiệm về vị trí ứng tuyển mà bạn có và định hướng tương lai (nếu có)........'></textarea>
            </div>
        </>
    )
}

export default FormSkill;