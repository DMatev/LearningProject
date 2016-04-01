CREATE TABLE [Core].[Translation](
   [TranslationID] UNIQUEIDENTIFIER NOT NULL CONSTRAINT PK_TranslationID PRIMARY KEY ([TranslationID]), 
   [MessageCode] NVARCHAR(200) NOT NULL CONSTRAINT FK_Translation_Message FOREIGN KEY REFERENCES [Core].[Message]([MessageCode]),
   [Content]  NVARCHAR(400) NOT NULL,
   [LanguageID] TINYINT NOT NULL CONSTRAINT FK_Translation_Languge FOREIGN KEY REFERENCES [CodeCore].[Language]([LanguageID]),
   [RowRevision] ROWVERSION NOT NULL,
   CONSTRAINT UC_Translation UNIQUE ([LanguageID], [MessageCode])
);
