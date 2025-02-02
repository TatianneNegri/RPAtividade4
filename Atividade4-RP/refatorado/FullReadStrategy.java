package refatorado;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * Concrete Strategy para leitura do conteúdo.
 */
class FullReadStrategy implements ReadStrategy {

    public String read(File file) throws IOException {
        try (FileInputStream i = new FileInputStream(file)) {
            StringBuilder output = new StringBuilder();
            int data;
            while ((data = i.read()) > 0) {
                output.append((char) data);
            }
            return output.toString();
        }
    }
}