import {Order} from "@/Pages/Order/Add";
import React, {FormEventHandler, MouseEventHandler, useEffect, useState} from "react";
import {
    Box,
    Button,
    CircularProgress,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import TestSearchForm from "@/Pages/Order/Components/TestSearchForm";
import {useGetData} from "@/services/api";
import routes from "@/routes";
import TestCard from "@/Pages/Order/Components/TestCard";
import {Test} from "@/types/test";
import {Close, ShoppingCart} from "@mui/icons-material";
import TestRequirement from "@/Pages/Order/Components/TestRequirement";

const TestMethodForm = (props: {
    tests: Order["test_method"],
    onChange: (key: keyof Order, value: any) => void,
    onSubmit: FormEventHandler
}) => {
    const [tests, setTests] = useState<Test[]>([]);
    const {getData, loading} = useGetData();
    useEffect(() => {
        handleTestSearch({})
    }, []);
    const handleTestSearch = (values: {
        search?: string,
        type?: string
    }) => getData<Test[]>(routes.tests.api.list.link, values).then(res => setTests(res.data));
    const toggleSelect = (id: string | number) => {
        let tmp = [...props.tests];
        let orderIndex = props.tests.findIndex((item) => item.id === id);
        if (orderIndex !== -1) {
            tmp.splice(orderIndex, 1);
        } else {
            let testIndex = tests.findIndex((item) => item.id === id);
            if (testIndex !== -1 && tests[testIndex]) {
                tmp.push(tests[testIndex]);
            }
        }
        props.onChange("test_method", tmp);
        return handleTestSearch({});
    }
    const handleDeleteTest: ((id: string | number | undefined) => MouseEventHandler) = (id: string | number | undefined) => () => {
        if (id !== undefined)
            toggleSelect(id)
    };
    const handleChangeRequirements = (index: number) => (requirements: Test["requirements"]) => {
        let tmp = [...props.tests];
        tmp[index] = {...tmp[index], requirements};
        props.onChange("test_method", tmp)
    }
    return <>
        <TestSearchForm onSearch={handleTestSearch}/>
        <Divider sx={{my: "2em"}}/>
        <Grid container spacing={2}>
            <Grid item
                  xs={7}
                  sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: 2
                  }}>
                {!loading ? tests.map((test: Test) => <TestCard key={test.id}
                                                                selected={props.tests?.findIndex((item) => item.id === test.id) !== -1}
                                                                test={test} onSelect={toggleSelect}/>) :
                    <CircularProgress/>}
            </Grid>
            <Grid item xs={5}>
                <Box component="form" onSubmit={props.onSubmit}>
                <Paper sx={{p: "1rem"}} elevation={5}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography>Product List({props.tests.length} selected)</Typography>
                        <Button
                            disabled={!props.tests.length}
                            variant={"outlined"}
                            type="submit"
                            startIcon={<ShoppingCart/>}
                        >Order Now</Button>
                    </Stack>
                </Paper>
                <Paper sx={{p: "1rem"}}>
                    <List>
                        {props.tests.map((test, index) => <ListItem key={"test-" + test.id}>
                            <ListItemText>
                                <Paper elevation={4}
                                       sx={{padding: 2}}>
                                    <h3>{test.name}</h3>
                                    <TestRequirement requirements={test?.requirements ?? []}
                                                     onChange={handleChangeRequirements(index)}/>
                                </Paper>
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton onClick={handleDeleteTest(test.id)}><Close/></IconButton>
                            </ListItemSecondaryAction>
                            <Divider/>
                        </ListItem>)}
                    </List>
                </Paper>
            </Box>
            </Grid>
        </Grid>
    </>;
}
export default TestMethodForm;
