USE [LearningProject]
GO
CREATE TABLE [CodeCore].[Language](
	[LanguageID] TINYINT NOT NULL CONSTRAINT PK_LangugeID PRIMARY KEY ([LanguageID]),
	[CountryISOCode] NVARCHAR(3) NOT NULL CONSTRAINT UK_Language UNIQUE ([CountryISOCode]),
	[RowRevision] ROWVERSION NOT NULL
);
