import React from "react";
import {Pagination as MuiPagination} from "@mui/material";

interface PaginationProps {
    paginate: {
        current_page: number;
        from: number;
        last_page: number;
        per_page: number;
        to: number;
        total: number;
    };
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({paginate, onChange}) => {

    return (
        <MuiPagination page={paginate.current_page} count={paginate.last_page} onChange={onChange} sx={{mx: "auto"}}/>
    );
};

export default Pagination;
