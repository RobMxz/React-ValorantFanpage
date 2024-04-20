import { Input } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
type Inputs = {
  skinSearch: string;
};
const Search = ({ setSearch }: any) => {
  const [searchValue, setSearchValue] = useState("");
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate(`/Skins/${data.skinSearch}`);
  };
  useEffect(
    useCallback(() => {
      console.log(searchValue);
      setSearch(searchValue);
    }, [searchValue, setSearch])
  );
  const navigate = useNavigate();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center>
          <Input
            placeholder="Search ..."
            width="720px"
            size="lg"
            focusBorderColor="teal.500"
            _placeholder={{ color: "gray.500" }}
            type="text"
            id="skinSearch"
            {...register("skinSearch", { required: true })}
            fontFamily="xd"
            letterSpacing="0.1em"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IconButton
            type="submit"
            aria-label="Search database"
            icon={<SearchIcon />}
            style={{ marginLeft: "1em" }}
            size="lg"
            colorScheme="teal"
          />
        </Center>
      </form>
    </>
  );
};

export default Search;
