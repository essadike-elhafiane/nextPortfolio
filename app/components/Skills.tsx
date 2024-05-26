import React from 'react';


const Skills = (props: { scroll: boolean }) => {
    return (
        <div className={`flex w-[90vw] ${!props.scroll ? 'flex-col' : ''} z-[5] items-center  justify-cenetr max-w-[800px] h-[100%]`}>
            <div className={`FontMon flex evenly gap-8 ${props.scroll ? 'flex-col w-[20%] h-[100%]': 'items-center  justify-cenetr max-w-[450px] w-[100vw] h-[60px] pl-8 pr-8 overflow-auto'}  z-[5]`}>
                <div>Tools</div>
                <div>Languages</div>
                <div>Framework</div>
                <div>SoftSkils</div>
            </div>
            <div className={`name ${props.scroll ? 'w-[80%]' : 'w-[100%]'} h-[600px]  z-[5]`}>
                <div>
                    asfasfasfa
                </div>
            </div>
        </div>
    );
}

export default Skills;