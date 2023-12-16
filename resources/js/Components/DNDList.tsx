import React, {ReactElement, useCallback} from "react";
import {OverridableComponent} from "@mui/types";

interface DNDListProps{
    items: {id:string|number,[key:string]:any}[];
    component:OverridableComponent<any>;
    onMove:(dragIndex:number,hoverIndex:number)=>void
}
const DNDList=({items,component:Component,onMove}:DNDListProps)=>{
    const handleMove=useCallback((dragIndex: number, hoverIndex: number) => {
        onMove(dragIndex,hoverIndex);
    }, [])
    const renderCard = useCallback(
        (item: { id: number; order: number,[key:string]:any}) => {
            return (
                <Component
                    key={item.id}
                    index={item.order}
                    moveCard={onMove}
                    {...item}
                />
            )
        },
        [],
    )
    return;
}
export default DNDList;
