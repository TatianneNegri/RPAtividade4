package refatorado;
import java.io.*;

/**
 * Singleton Parser classe usando o padrão de projeto Strategy para leitura de arquivos.
 */
public class Parser {
    private static Parser instance;
    private File file;
    private ReadStrategy readStrategy;

    private Parser() {}

    public static synchronized Parser getInstance() {
        if (instance == null) {
            instance = new Parser();
        }
        return instance;
    }

    public synchronized void setFile(File f) {
        this.file = f;
    }

    public synchronized File getFile() {
        return file;
    }

    public void setReadStrategy(ReadStrategy strategy) {
        this.readStrategy = strategy;
    }

    public String getContent() throws IOException {
        if (readStrategy == null) {
            throw new IllegalStateException("Read strategy not set");
        }
        return readStrategy.read(file);
    }

    public void saveContent(String content) throws IOException {
        try (FileOutputStream o = new FileOutputStream(file)) {
            o.write(content.getBytes());
        }
    }
}