import React, { Component } from "react";

export default class ChitChat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {}
1179151797
    render() {
        const { display_name, image_align, photo, role } = this.props;
        return (<div className="w-full sm:w-1/2 sm:p-2 md:w-1/3 lg:w-1/4 border-box md:p-3">
            <div className="bg-white relative overflow-hidden sm:rounded-lg dark:bg-gray-700 sm:shadow-md sm:flex sm:items-center">
                <div 
                    className={`z-0 absolute bg-cover bg-${image_align || 'center'} block mx-auto w-full h-96 sm:h-40 sm:mx-0 sm:flex-shrink-0`}
                    style={{ backgroundImage: `url(https://cdn.cebu.dev/people/${photo}.jpg)` }} />
                <div className="block mx-auto w-full h-96 sm:h-40 bg-gradient-to-b from-transparent to-black opacity-70 absolute z-10"></div>
                <div className="z-10 relative text-right h-96 w-full sm:h-40 box-border space-y-2 sm:p-4 pt-52 sm:pt-14 px-12">
                    <div className="space-y-0.5 sm:space-y-0 antialiased">
                        <p className={`text-${display_name.length > 6 ? 5 : 6}xl text-black font-black dark:text-white sm:text-lg`}>
                            {display_name}
                        </p>
                        <p className={`text-white sm:dark:text-gray-300 font-extralight sm:font-medium text-${role.length > 10 ? 2 : 3}xl sm:text-xs`}>{role}</p>
                    </div>
                    <button className="px-2 py-2 text-sm text-purple-600 dark:text-purple-100 font-bold rounded-full dark:bg-pink-500 light:border light:border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
</svg>
                    </button>
                </div>
            </div></div>
        );
    }
}
