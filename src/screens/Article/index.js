import React, { useEffect, useState, useMemo } from "react";
import { View, Text, FlatList } from "react-native";
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from "./styles";
import SearchBar from "react-native-searchbar";
import Highlighter from "react-native-highlight-words";

import axios from "axios";

export default function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticle() {
      const response = await axios.get(
        "https://testando2000.000webhostapp.com/CHECKLIST/_ISA.php/buscarArtigo?codigo=24&artigo=0&parte=0"
      );

      setArticles(response.data);
    }

    getArticle();
  }, []);

  function _handleResults(results) {
    setArticles(results);
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar data={articles} handleResults={_handleResults} showOnLoad />

      <FlatList
        style={{ marginTop: 120 }}
        data={articles.slice(0, 3)}
        renderItem={({ item }) => (
          <View>
            <Highlighter
              highlightStyle={{ backgroundColor: "yellow" }}
              searchWords={["lei", "posterior", "Não"]}
              textToHighlight={item.artigoInalterado}
            />
            {/* <Text>{item.artigoInalterado}</Text> */}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
