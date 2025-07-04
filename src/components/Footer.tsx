import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Space } from "antd";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="text-center">
          <p className="text-gray-600 ">© Developed by Saif Chowdhury.</p>

          <p className="text-gray-500 mt-2">
            Built with React, TypeScript, Ant Design, Tailwind CSS & RTK Query.
          </p>

          <Space className="mt-2" size="middle">
            <a
              href="https://github.com/saiffardin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-xl"
            >
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/saiffardin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 text-xl"
            >
              <LinkedinOutlined />
            </a>
          </Space>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
