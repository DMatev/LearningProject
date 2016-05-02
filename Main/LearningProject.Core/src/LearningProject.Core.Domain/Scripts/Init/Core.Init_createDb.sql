USE [Master]
GO
IF db_id('LearningProject') IS NULL
	BEGIN
		CREATE DATABASE [LearningProject]
	END;